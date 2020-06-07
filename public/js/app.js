count = 0;

function copyMail(){
    const mailID = 'alok328raj@gmail.com';
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', mailID);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    var toast = new Toasty();
    toast.configure({duration: 1200});
    toast.transition("scale");
    msgs = ['Copied already', 'What do you want?', 'How can I help you?', 
            'Quit it!', 'Hey, enough!', "There's only so many things I can do!"];
    if(count === 0){
        toast.warning("Mail Id Copied! Dare you do it again?");
    }else{
        toast.warning(msgs[Math.floor(Math.random() * msgs.length)]);
    }
    count+=1;
}

function init(){
    const pages = document.querySelectorAll('.page');
    const tabs = document.querySelectorAll('.tabs');
    const tabsCol = document.querySelectorAll('.item-nav-col');
   
    let currentTab = 0;
    let scrollTab = 0;

    tabsCol.forEach((tab, index)=>{
        tab.addEventListener('click', function(){
            changeTabsCol(this);
            changePage(index);
            scrollTab = index
        });
    });
    tabs.forEach((tab, index)=>{
        tab.addEventListener('click', function(){
            changeTabs(this);
            changePage(index);
            scrollTab = index;
        });
    });

    function changeTabsSlider(tabNumber){
        const activeTab = document.querySelectorAll('.tabs')[tabNumber];
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        activeTab.classList.add('active');
        const activeTabCol = document.querySelectorAll('.tabs-col')[tabNumber];
        tabsCol.forEach(tab => {
            tab.classList.remove('active');
        })
        activeTabCol.classList.add('active');
    }

    function changeTabsCol(tabBody){
        tabsCol.forEach((tab)=>{
            tab.classList.remove('active');
        });
        tabBody.classList.add('active');
    }
    function changeTabs(tabBody){
        tabs.forEach((tab)=>{
            tab.classList.remove('active');
        })
        tabBody.classList.add('active');
    }
    function changePage(tabNumber){
        const nextPage = pages[tabNumber];
        const currPage = pages[currentTab];

        const tl = gsap.timeline();
        tl.fromTo(currPage, 0.3, {opacity: 1, pointerEvents: 'all'}, {opacity:0, pointerEvents: 'none'})
        .fromTo(nextPage, 0.3, {opacity:0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'all'});
        
        currentTab = tabNumber; 
    }

    document.addEventListener('wheel', throttle(scrollChange, 1500));
    // document.addEventListener('touchmove', throttle(scrollChange, 1500));
    function scrollChange(e){
        console.log(e);
        if(e.deltaY>0){
            scrollTab += 1;
        }else{
            scrollTab -= 1;
        }
        if(scrollTab>4){
            scrollTab = 0;
        }
        if(scrollTab<0){
            scrollTab = 4;
        }
        changeTabsSlider(scrollTab);
        changePage(scrollTab);
    }


    //navbar
    navOpen = document.querySelector('.nav-navbar');
    navClosed = document.querySelector('.nav-navbar-collapse');
    if(window.innerWidth > 800){
        navOpen.style.removeProperty('display');
        navClosed.style.display = 'none';
    }else{
        navClosed.style.removeProperty('display');
        navOpen.style.display = 'none';
    }
    window.addEventListener("resize", function(){
        tabs[0].classList.add('active');
        tabsCol[0].classList.add('active');
        changePage(0);
        changeTabs(tabs[0]);
        changeTabsCol(tabsCol[0]);
        changeTabsSlider(0);
        scrollTab = 0;
        if(window.innerWidth > 800){
            navOpen.style.removeProperty('display');
            navClosed.style.display = 'none';
        }else{
            navClosed.style.removeProperty('display');
            navOpen.style.display = 'none';
        }
    });
    
}

function throttle(func, limit){
    let inThrottle;
    return function(){
        const agrs = arguments;
        const context = this;
        if(!inThrottle){
            func.apply(context, agrs);
            inThrottle = true;
            setTimeout(() => inThrottle=false, limit);
        }
    };
}

init()