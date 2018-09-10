// elements from the dom
const tabList = document.querySelector('.tab-list')
const tabs = document.querySelectorAll('.tab')
const touchTargets = document.querySelectorAll('.circle')
const confirmBtn = document.querySelector('.confirmation-btn')

// showing tab content
const showTabContent = (tab) => {
  const tabContent = document.querySelector(tab.dataset.target)
  tabContent.style.display = 'block'
  if (tab.dataset.target === '#info-section') {
    document.querySelector('.sticky-footer').style.display = 'none';
  } else {
    document.querySelector('.sticky-footer').style.display = 'block';
  }
}

// hiding previous tabs content
const hideTabContent = (tab) => {
  const tabContent = document.querySelector(tab.dataset.target)
  tabContent.style.display = 'none'
}

// function to switch tabs
const switchTabs = (e) => {
  if (e.target.tagName == 'LI') {
    // grabbing the target element by id
    const targetTab = document.querySelector(`#${e.target.id}`)
    tabs.forEach(tab => {
      // testing against target and applying active styles. showing/hiding tab content
      if (tab == targetTab) {
        tab.classList.add('active')
        showTabContent(tab)
      } else {
        tab.classList.remove('active')
        hideTabContent(tab)
      }
    })
  }

  // stopping propagation up the dom tree
  e.stopPropagation()
}


// checking on whether the btn should be styled or not. adding/removing class accordingly
const styleConfirmBtn = () => {

  // query all the circles that are selected
  const selectedTargets = document.querySelectorAll('.circle.selected')

  // testing to determine if confirm btn needs to be styled
  if (selectedTargets === [] || selectedTargets.length === 0) {
    confirmBtn.classList.remove('selected')
  }
  if (selectedTargets.length !== 0 && confirmBtn.classList.value !== 'confirm-btn selected') {
    confirmBtn.classList.add('selected')
  }
}


// fn to alter confirm redemption styles
const confirmRedemption = (e) => {
  // grabbing class values
  const targetClasses = e.target.classList.value;

  // adding/removing seleced class and testing confirm btn
  if (targetClasses === 'circle' ) {
    e.target.classList.add('selected')
    styleConfirmBtn()
  } else if (targetClasses === 'circle selected') {
    e.target.classList.remove('selected')
    styleConfirmBtn()
  }
}


// event listeners
window.addEventListener('click', confirmRedemption)
tabList.addEventListener('click', switchTabs)
