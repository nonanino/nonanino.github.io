 'use strict';
 
 // Header에 페이지 아래로 스코롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Aroow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2 ) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
})

function show () {
    document.querySelector(".background").className = "background show";
  }
  
  function close () { 
    document.querySelector(".background").className = "background";
  }
  
//   document.querySelector("#show").addEventListener('click', show);
//   document.querySelector("#close").addEventListener('click', close);

  const openPopup = () => {
    const popup_back = document.getElementById('popup_back');
    popup_back.style.display = 'block';
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('stop_scroll')
}

const closePopup = () => {
    const popup_back = document.getElementById('popup_back');
    popup_back.style.display = 'none';
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('stop_scroll')
}

window.onload = () => {
    const popup_back = document.getElementById('popup_back');
    popup_back.addEventListener('click', () => {
        console.log('back')
        closePopup();
    })
    const popup_content = document.getElementById('popup_content');
    popup_content.addEventListener('click', (e) => {
        console.log('contents')
        e.stopPropagation();
        // closePopup();
    })

    const close_btn = document.getElementById('close_button');
    close_btn.addEventListener('click', () => {
        closePopup();
    })

    const project_1 = document.getElementById('project_1');
    project_1.addEventListener('click', () => {
        const popup = document.getElementById('popup_img');
        popup.src = 'images/sample.png'        // 원하는 이미지 명을 넣으면 됩니다
        openPopup();
    })

    const project_2 = document.getElementById('project_2');
    project_2.addEventListener('click', () => {
        const popup = document.getElementById('popup_img');
            popup.src = 'images/sample2.png'    // 원하는 이미지 명을 넣으면 됩니다
        openPopup();
    })
    const project_3 = document.getElementById('project_3');
    project_3.addEventListener('click', () => {
        const popup = document.getElementById('popup_img');
        popup.src = 'images/sample.png'         // 원하는 이미지 명을 넣으면 됩니다
        openPopup();
    })
    const project_4 = document.getElementById('project_4');
    project_4.addEventListener('click', () => {
        const popup = document.getElementById('popup_img');
        popup.src = 'images/sample.png'         // 원하는 이미지 명을 넣으면 됩니다
        openPopup();
    })
    const project_5 = document.getElementById('project_5');
    project_5.addEventListener('click', () => {
        const popup = document.getElementById('popup_img');
        popup.src = 'images/sample.png'         // 원하는 이미지 명을 넣으면 됩니다
        openPopup();
    })
    const project_6 = document.getElementById('project_6');
    project_6.addEventListener('click', () => {
        const popup = document.getElementById('popup_img');
        popup.src = 'images/sample.png'         // 원하는 이미지 명을 넣으면 됩니다
        openPopup();
    })
    const project_7 = document.getElementById('project_7');
    project_7.addEventListener('click', () => {
        const popup = document.getElementById('popup_img');
        popup.src = 'images/sample.png'         // 원하는 이미지 명을 넣으면 됩니다
        openPopup();
    })
    const project_8 = document.getElementById('project_8');
    project_8.addEventListener('click', () => {
        const popup = document.getElementById('popup_img');
        popup.src = 'images/sample.png'         // 원하는 이미지 명을 넣으면 됩니다
        openPopup();
    })
}
