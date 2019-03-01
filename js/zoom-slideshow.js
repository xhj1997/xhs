// Zoom SlideShow - jQuery Plugin
// Copyright (c) 2013, Vincent CIBELLI
// Licenced under MIT Licence
(function($) {
    $.fn.extend({
		// Déclaration du plugin
		setZoomPicture: function(options) {	
			//Déclaration des paramètres par défaut
			var defaults = {
				thumbsContainer: null,
				prevContainer: null,
				nextContainer: null,
				zoomContainer: null,
				zoomLevel: 2,
				loadMsg: 'Loading...'
			};

			// Initialisation de la collection de paramètres
			var _options = $.extend(defaults, options);
			
			// Création de la classe de gestion
			var diaporama = {
				_opt: null,
				_totalImg: 0,
				_currentImg: 0,
				_thumbSize: 0,

				init: function(opt) {						
					this._opt = opt;
					this._totalImg = $(this._opt.thumbsContainer).find("img").length - 1;
					this._currentImg = 0;
					this._thumbSize = $(this._opt.thumbsContainer).find("img").first().outerWidth(true) + 3;

					// Initialisation des événements 'click' sur les miniatures et les boutons
					this._attachThumbsEvent();

					// Initialisation des effets de zoom
					this._setZoomEffects();

					// Affichage de la première image de la banque
					this._showPicture($(this._opt.thumbsContainer).find("img").first());
				},

				_attachThumbsEvent: function() {
					var me = this;

					$(this._opt.thumbsContainer).find("img").click(function(e) {
						me._setDefault();

						me._currentImg = $('img').index(this) - 1;
						var thumbImg = $(this);

						me._animateThumbs(e);

						// Remplacement de l'image affiché par la nouvelle
						me._showPicture($(thumbImg));
					});

					$(this._opt.prevContainer).click(function(e) {me._previous(e);});

					$(this._opt.nextContainer).click(function(e) {me._next(e);});
				},

				_setDefault: function() {
					$(this._opt.zoomContainer)
						.unbind('mousemove')
						.hide();
							
					$(this).css('cursor', 'default');
				},

				_previous: function(pos) {
					if (this._currentImg > 0) {
						this._currentImg--;
						
						this._animateThumbs(pos);
							
						this._showPicture($(this._opt.thumbsContainer).find("img")[this._currentImg]);
					}
				},

				_next: function(pos) {
					if (this._currentImg < this._totalImg) {
						this._currentImg++;
						
						this._animateThumbs(pos);
							
						this._showPicture($(this._opt.thumbsContainer).find("img")[this._currentImg]);
					}
				},
				
				_animateThumbs: function(pos) {
					var me = this;

					if (($(document).width() / 2) < pos.pageX) {
						$(me._opt.thumbsContainer).animate(
							{scrollLeft : Math.max(0, $(me._opt.thumbsContainer).scrollLeft() + me._thumbSize)},
							800
						);
					}
					else {
						$(me._opt.thumbsContainer).animate(
							{scrollLeft : Math.max(0, $(me._opt.thumbsContainer).scrollLeft() - me._thumbSize)},
							800
						);
					}
				},

				_showPicture: function(thumb) {	
					$(this._opt.thumbsContainer).find('img').css('background', '#fff');
					$(thumb).css('background', '#ccc');
					
					var _img = new Image();
					_img.src = $(thumb).attr('src');
					
					var me = this;

					$(this._opt.jObject).find("img").fadeOut('slow', function() {
						var img = $(this);
						
						$(img).attr('src', $(thumb).attr('src'))
							  .attr('alt', $(thumb).attr('alt'));
							   
						
					
						$(me._opt.jObject).animate(
							{ height: (_img.height / me._opt.zoomLevel) + 'px' },
							500,
							function() {
								$(img).width(_img.width / me._opt.zoomLevel)
									  .fadeIn('slow');
							}
						);
					});
				},
				
				_setZoomEffects: function() {
					var me = this;
					
					$(this._opt.jObject).find('img')
						.bind('mouseover', function(e) {
							var imgObject = $(this);

							me._setZoomPosition(e);
							
							$(me._opt.zoomContainer)
								.css('cursor', 'none')
								.show();

							$(document).bind('mousemove', function(pos) { 
								me._moveZoom(imgObject, pos);
							});
						});
				},
				
				_moveZoom: function(img, pos) {
					if (pos.pageX < $(img).position().left ||
						pos.pageX > $(img).position().left + $(img).width() ||
						pos.pageY < $(img).position().top ||
						pos.pageY > $(img).position().top + $(img).height() ) {
						this._setDefault();
					}
					else {
						var delta = 50 * (this._opt.zoomLevel - 1);
						
						this._setZoomPosition(pos);
						
						$(this._opt.zoomContainer)
							.css('background-image', "url('" + $(img).attr('src') + "')")
							.css('background-position', 
								(((pos.pageX - 50 - $(img).position().left) * this._opt.zoomLevel * -1) - delta).toString() + "px " + 
								(((pos.pageY - 50 - $(img).position().top) * this._opt.zoomLevel * -1) - delta).toString() + "px");
					}
				},
	
				_setZoomPosition: function(_pos) {
					$(this._opt.zoomContainer)
						.css('top', _pos.pageY - 50)
						.css('left', _pos.pageX - 50);
				}
			};

			// Retourne chaque objet jQuery
			return this.each(function() {
				// Ajoute l'objet jQuery courant à la collection 'options'
				_options.jObject = $(this);
				
				// Création d'un message d'attente pendant le chargement
				$(this).find('img').hide();
				$(this).prepend('<div id="loading">' + _options.loadMsg + '</div>');
				$('#loading')
					.css('line-height', $(this).css('height'))
					.queue(function(loop) {
						$(this).fadeIn(1000).delay(500).fadeOut(1000);
						$(this).queue(arguments.callee);
						loop();
					});

				// Chargement de la classe diaporama a la fin du téléchargement
				$(window).load(function() {
					$('#loading').remove();
					
					// Initialisation de la classe 'diaporama'
					diaporama.init(_options);
				});
			});
		}
    });
})(jQuery);
