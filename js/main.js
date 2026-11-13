window.addEventListener('load', function () {
	var preloader = document.getElementById('p_prldr');
	if (!preloader) {
		return;
	}
	var svgAnm = preloader.querySelector('.svg_anm');
	if (svgAnm) {
		svgAnm.style.display = 'none';
	}
	window.setTimeout(function () {
		preloader.style.transition = 'opacity 0.4s ease';
		preloader.style.opacity = '0';
		window.setTimeout(function () {
			preloader.style.display = 'none';
		}, 400);
	}, 500);
});

document.addEventListener('DOMContentLoaded', function () {
	var links = document.querySelectorAll('#two .work-item a');
	if (!links.length) {
		return;
	}

	var overlay = document.createElement('div');
	overlay.id = 'lightbox';
	overlay.innerHTML =
		'<div class="lightbox-backdrop"></div>' +
		'<div class="lightbox-content" role="dialog" aria-modal="true" aria-label="Image preview">' +
		'<button class="lightbox-close" type="button" aria-label="Close">&times;</button>' +
		'<img alt="" />' +
		'</div>';
	document.body.appendChild(overlay);

	var img = overlay.querySelector('img');
	var closeBtn = overlay.querySelector('.lightbox-close');

	function closeLightbox() {
		overlay.classList.remove('is-open');
		img.src = '';
	}

	function openLightbox(src, alt) {
		img.src = src;
		img.alt = alt || 'Image preview';
		overlay.classList.add('is-open');
	}

	overlay.addEventListener('click', function (event) {
		if (event.target === overlay || event.target.classList.contains('lightbox-backdrop')) {
			closeLightbox();
		}
	});

	closeBtn.addEventListener('click', closeLightbox);

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
			closeLightbox();
		}
	});

	links.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			var thumb = link.querySelector('img');
			openLightbox(link.getAttribute('href'), thumb ? thumb.alt : '');
		});
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var links = document.querySelectorAll('a[data-contact]');
	Array.prototype.forEach.call(links, function (link) {
		link.addEventListener('click', function (event) {
			if (link.getAttribute('href') !== '#') {
				return;
			}
			event.preventDefault();
			var href = atob(link.getAttribute('data-contact')).split('').reverse().join('');
			link.setAttribute('href', href);
			link.textContent = href.slice(href.indexOf(':') + 1);
		});
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var year = String(new Date().getFullYear());
	Array.prototype.forEach.call(document.querySelectorAll('.current-year'), function (el) {
		el.textContent = year;
	});
});
