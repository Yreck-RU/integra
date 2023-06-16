"use strict"
//==================================================================================================================================================
//Бэграунд картинок - "Начало"
//==================================================================================================================================================

function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

//==================================================================================================================================================
//Бэграунд картинок - "Конец"
//==================================================================================================================================================





//==================================================================================================================================================
//Recent Transactions - "Начало"
//==================================================================================================================================================

const listSwitchings = document.querySelectorAll('._list-switching');

if (listSwitchings) {
	for (let i = 0; i < listSwitchings.length; i++) {
		let listSwitching = listSwitchings[i];
		let listSwitchingButton = listSwitching.querySelector('._list-switching__button');
		let listSwitchingWrapper = listSwitching.querySelector('._list-switching__wrapper');

		listSwitchingButton.addEventListener("click", function (e) {
			listSwitchingButton.classList.toggle('_active');
			listSwitchingWrapper.classList.toggle('_active');
		});
	}
}

//==================================================================================================================================================
//Recent Transactions - "Конец"
//==================================================================================================================================================





//==================================================================================================================================================
//Таймер - "Начало"
//==================================================================================================================================================

const timers = document.querySelectorAll('._timer');

if (timers) {
	function gettingSeconds(numberText) {
		let numberOne = numberText.slice(0, 2);
		let numberTwo = numberText.slice(3, 5);
		let numberTwree = numberText.slice(6, 8);
		let number = ((+numberOne * 60) + +numberTwo) * 60 + +numberTwree;
		return number;
	}

	for (var i = 0; i < timers.length; i++) {
		let timer = timers[i];
		let timerShow = timer.querySelector("._timer-content");
		let timerText = timerShow.innerText.replace(/[^0-9,.]/g, ' ');
		let timerNumber = +gettingSeconds(timerText);

		timer = setInterval(function () {
			let seconds = timeMinut%60;
			let minutes = timeMinut/60%60;
			let hour = timeMinut/60/60%60;
			if (timeMinut <= 0) {
				clearInterval(timer);
				alert("Время закончилось");
			} else {
				let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
				timerShow.innerHTML = strTimer;
			}
			--timeMinut;
		}, 1000)

		let timeMinut = parseInt(timerNumber);
	}
}

//==================================================================================================================================================
//Таймер - "Конец"
//==================================================================================================================================================









//==================================================================================================================================================
//Копирование ссылок - "Начало"
//==================================================================================================================================================

const copiaContents = document.querySelectorAll('._copia-content');

if (copiaContents) {
	for (let i = 0; i < copiaContents.length; i++) {
		let copiaContent = copiaContents[i];
		let copiaContentButton = copiaContent.querySelector('._copia-content__button');
		let copiaContentWrapper = copiaContent.querySelector('._copia-content__content');

		copiaContent.addEventListener("click", function (e) {
			if (copiaContentWrapper.classList.contains('_input')) {
				let copiaContentWrapperContent = copiaContentWrapper;
				navigator.clipboard.writeText(copiaContentWrapperContent.value);
			} else {
				let copiaContentWrapperContent = copiaContentWrapper.innerText;
				navigator.clipboard.writeText(copiaContentWrapperContent);
			}
		});
	}
}

//==================================================================================================================================================
//Копирование ссылок - "Конец"
//==================================================================================================================================================


/*
let now = new Date();
alert( now );
*/





//==================================================================================================================================================
//Линия - "Начало"
//==================================================================================================================================================

const withdraws = document.querySelectorAll('._withdraw');

if (withdraws) {
	for (let i = 0; i < withdraws.length; i++) {
		let withdraw = withdraws[i];
		let withdrawLine = withdraw.querySelector('._withdraw-line');
		let withdrawMin = withdraw.querySelector('._withdraw-min').innerText.replace(/[^0-9,.]/g, ' ');
		let withdrawBig = withdraw.querySelector('._withdraw-big').innerText.replace(/[^0-9,.]/g, ' ');

		if (withdrawLine && withdrawMin && withdrawBig) {
			let withdrawNumber = +withdrawMin / (+withdrawBig / 100);
			withdrawLine.style.width = `${withdrawNumber}%`;
		}
	}
}

//==================================================================================================================================================
//Линия - "Конец"
//==================================================================================================================================================





//==================================================================================================================================================
//Бургер - "Начало"
//==================================================================================================================================================

const iconMenu = document.querySelector('._menu__icon');
const menuBody = document.querySelector('._menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


//==================================================================================================================================================
//Бургер - "Конец"
//==================================================================================================================================================





//==================================================================================================================================================
//График - "Начало"
//==================================================================================================================================================

/*const receivingInterests = document.querySelectorAll('._receiving-interests');
let receivingInterestsObgeg = [];

const receivingFlowers = document.querySelectorAll('._receiving-flowers');
let receivingFlowersObgeg = [];

const receivingNumber = document.querySelectorAll('._receiving-number');
let receivingNumberObgeg = [];

const receivingTitles = document.querySelectorAll('._receiving-title');
let receivingTitleObgeg = [];

if (receivingInterests) {
	for (let i = 0; i < receivingInterests.length; i++) {
		let receivingInterest = receivingInterests[i];
		let receivingInterestContent = +receivingInterest.querySelector('._receiving-interests__content').innerText.replace(/[^0-9,.]/g, ' ');
		receivingInterestsObgeg.push(receivingInterestContent);
	}
}
if (receivingFlowers) {
	for (let i = 0; i < receivingFlowers.length; i++) {
		let receivingFlower = receivingFlowers[i];
		let receivingFlowerContent = receivingFlower.querySelector('._receiving-flowers__content').innerText;
		receivingFlower.querySelector('._receiving-flowers__content').style.backgroundColor = `${receivingFlowerContent}`;
		receivingFlowersObgeg.push(receivingFlowerContent);
	}
}
if (receivingNumber) {
	for (let i = 0; i < receivingNumber.length; i++) {
		let receivingNumbe = receivingNumber[i];
		let receivingNumbeContent = receivingNumbe.innerText;
		receivingNumberObgeg.push(receivingNumbeContent);
	}
}

if (receivingTitles) {
	for (let i = 0; i < receivingTitles.length; i++) {
		let receivingTitle = receivingTitles[i];
		let receivingTitleContent = receivingTitle.innerText;
		receivingTitleObgeg.push(receivingTitleContent);
	}
}



function colorOutput(n) {
	return receivingFlowersObgeg[n];
}
function numberOutput(n) {
	return receivingNumberObgeg[n];
}
function titleOutput(n) {
	return receivingTitleObgeg[n];
}*/

/*====================*/

/*let toolepItems = document.querySelectorAll('.apexcharts-legend-text');


const toolepButtonWrapper = document.querySelector(".schedule-button");

if (toolepItems && toolepWrappers) {

}*/
//for (let i = 0; i < toolepItems.length; i++) {
	//let toolepItem = toolepItems[i].cloneNode(true);
	//let clonedNode = toolepWrappers[i].cloneNode(true);
	//console.log(clonedNode);
	//clonedNode.appendChild(toolepWrappers[i]);
	//toolepItems[i].appendChild(toolepWrappers[i]);
//}

/*====================*/



/*series: [74.27, 25.73],*/
/*['#16c784', '#1750b1']*/
var options = {
	series: [74.27, 25.73],
	chart: {
		type: 'donut',
	},
	fill: {
		colors: ['#16c784', '#1750b1'],
	},
	dataLabels: {
		enabled: false,
	},
	legend: {
	  /*formatter: function(seriesName, opts) {
	    return [
			`<div class="schedule-button__item _receiving-interests _receiving-flowers"><div class="schedule-button-title"><div class="schedule-button-title__icon _receiving-flowers__content" style="background: ${colorOutput(opts.seriesIndex)};"></div><div class="schedule-button-title__text">${titleOutput(opts.seriesIndex)}</div></div><div class="schedule-button-content"><div class="schedule-button-content__title">${numberOutput(opts.seriesIndex)}</div><div class="schedule-button-content__number _receiving-interests__content">${opts.w.globals.series[opts.seriesIndex]}</div></div></div>`
	    ]
	  },*/
	  onItemClick: {
          toggleDataSeries: false
      },
      onItemHover: {
          highlightDataSeries: true,
      },
	},
	states: {
	  hover: {
	   allowMultipleDataPointsSelection: false,
	   filter: {
	      type: 'darken',
		  value: 1,
	   }
	  },
	  active: {
	  	allowMultipleDataPointsSelection: false,
	  	zoomed: false,
        filter: {
          type: 'none'
        }
	  },
	},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();





const schedule = document.querySelector('.schedule');

if (schedule) {
	window.addEventListener('resize', (e) => {
		schedule.classList.remove('_active');
		let timerinAniItemWrapper = setTimeout(function tick() {
			schedule.classList.add('_active');

			let rect = document.querySelector(".apexcharts-inner").getBoundingClientRect();
			let height = rect.height;

			let scheduleTitle = document.querySelector(".schedule-title");
			scheduleTitle.style.height = `${height}px`;
			scheduleTitle.style.width = `${height}px`;

		}, 1200);
	});
	let timerinAniItemWrapper = setTimeout(function tick() {
		schedule.classList.add('_active');

		let rect = document.querySelector(".apexcharts-inner").getBoundingClientRect();
		let height = rect.height;

		let scheduleTitle = document.querySelector(".schedule-title");
		scheduleTitle.style.height = `${height}px`;
		scheduleTitle.style.width = `${height}px`;

	}, 1200);



	/*const ApexchartsTooltip = document.querySelector(".apexcharts-tooltip");
	let apexchartsNumber;

	if (ApexchartsTooltip) {
		document.querySelector(".apexcharts-series").onmouseover = function(event) {
			let timerTwo = setInterval(function () {
				if (ApexchartsTooltip.classList.contains('apexcharts-active')) {
					apexchartsNumber = ApexchartsTooltip.querySelector(".apexcharts-tooltip-text-y-value").innerText;
					//console.log(apexchartsNumber);
					let receivingInterestWapper = document.querySelector(".schedule");
					let receivingInterestNumbers = receivingInterestWapper.querySelectorAll("._receiving-interests");
					for (let i = 0; i < receivingInterestNumbers.length; i++) {
						let receivingInterestNumber = receivingInterestNumbers[i].querySelector("._receiving-interests__content").innerText;
						if (+apexchartsNumber == +receivingInterestNumber) {
							for (let i = 0; i < receivingInterestNumbers.length; i++) {
								receivingInterestNumbers[i].classList.remove('_hover');
							}
							receivingInterestNumbers[i].classList.add('_hover');
						}
					}
					//let receivingInterestWapper = document.querySelector(".schedule");
				} else {
					let receivingInterestNumbers = document.querySelectorAll("._receiving-interests");
					for (let i = 0; i < receivingInterestNumbers.length; i++) {
						receivingInterestNumbers[i].classList.remove('_hover');
					}
				}
			}, 10)

		};
		document.querySelector(".apexcharts-series").onmouseout = function(event) {
			let timerinAniItemWrapper = setTimeout(function tick() {
				let receivingInterestItems = document.querySelectorAll("._receiving-interests");
				for (let i = 0; i < receivingInterestItems.length; i++) {
					receivingInterestItems[i].classList.remove('_hover');
				}
			}, 10);
		};

		let receivingInterestItems = document.querySelectorAll(".apexcharts-legend-text");

		if (receivingInterestItems) {
			for (var i = 0; i < receivingInterestItems.length; i++) {
				let receivingInterestItem = receivingInterestItems[i];
				receivingInterestItem.onmouseover = function(event) {
					let schedule = document.querySelector(".schedule");
					schedule.classList.add('_hover');
				}
				receivingInterestItem.onmouseout = function(event) {
					let schedule = document.querySelector(".schedule");
					schedule.classList.remove('_hover');
				}
			}
		}
	}*/
}



//==================================================================================================================================================
//График - "Конец"
//==================================================================================================================================================





//==================================================================================================================================================
//Динамический адаптив - "Начало"
//==================================================================================================================================================

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();

//==================================================================================================================================================
//Динамический адаптив - "Конец"
//==================================================================================================================================================








//==================================================================================================================================================
//Спойлеры - "Начало"
//==================================================================================================================================================


const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});

	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});

			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}

let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration)
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

//==================================================================================================================================================
//Спойлеры - "Конец"
//==================================================================================================================================================












//==================================================================================================================================================
//Линивая загрусска - "Начало"
//==================================================================================================================================================
const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
			ibg();
		}
	});
}

window.addEventListener("scroll", lazuScroll);
function lazuScroll() {
	if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
		lazyScrollCheck();
		ibg();
	}
}

function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.src) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else if (lazyImages[imgIndex].dataset.srcset) {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPositions[imgIndex];
	}
}
//==================================================================================================================================================
//Линивая загрусска - "Начало"
//==================================================================================================================================================