function init(){
    const pages = document.querySelectorAll('.page');
    const tabs = document.querySelectorAll('.tabs');
    const tabsCol = document.querySelectorAll('.item-nav-col');
    currentTab = 0;
    tabsCol.forEach((tab, index)=>{
        tab.addEventListener('click', function(){
            changeTabsCol(this);
            changePage(index);
        });
    });
    tabs.forEach((tab, index)=>{
        tab.addEventListener('click', function(){
            changeTabs(this);
            changePage(index);
            // scrollTab = index;
        });
    });
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
    navOpen = document.querySelector('.nav-navbar');
    navClosed = document.querySelector('.nav-navbar-collapse');
    console.log(navOpen);
    console.log(navClosed);
    if(window.innerWidth > 800){
        navOpen.style.removeProperty('display');
        navClosed.style.display = 'none';
    }else{
        navClosed.style.removeProperty('display');
        navOpen.style.display = 'none';
    }
    window.addEventListener("resize", function(){
        // currentTab = 0;
        tabs[0].classList.add('active');
        tabsCol[0].classList.add('active');
        changePage(0);
        changeTabs(tabs[0]);
        changeTabsCol(tabsCol[0]);
        if(window.innerWidth > 800){
            navOpen.style.removeProperty('display');
            navClosed.style.display = 'none';
        }else{
            navClosed.style.removeProperty('display');
            navOpen.style.display = 'none';
        }
    });
    
}
init()