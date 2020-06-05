function init(){
    const pages = document.querySelectorAll('.page');
    const tabs = document.querySelectorAll('.tabs');
    const tabsCol = document.querySelectorAll('.item-nav-col');
    const navbar = document.querySelector('.my-navbar');
    const navItems = document.querySelectorAll('li.item-nav a');
    const navItemsCol = document.querySelectorAll('li.item-nav-col a')
    // console.log(navItems);
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

        // if(tabNumber == 0){
        //     navbar.style.background = '#01E08F'
        //     navItems.forEach((navItem)=>{
        //         navItem.style.color = '#013870'
        //     })
        //     navItemsCol.forEach((navItem)=>{
        //         navItem.style.color = '#013870'
        //     })
        //     navItems[tabNumber].style.color = '#EDF5E0';
        //     navItemsCol[tabNumber].style.color = '#EDF5E0';
        // }else{
        //     navbar.style.background = '#013870';
        //     navItems.forEach((navItem)=>{
        //         navItem.style.color = '#01E08F';
        //     })
        //     navItemsCol.forEach((navItem)=>{
        //         navItem.style.color = '#01E08F'
        //     })
        //     navItems[tabNumber].style.color = '#EDF5E0';
        //     navItemsCol[tabNumber].style.color = '#EDF5E0';
        // }

        const tl = gsap.timeline();
        tl.fromTo(currPage, 0.3, {opacity: 1, pointerEvents: 'all'}, {opacity:0, pointerEvents: 'none'})
        .fromTo(nextPage, 0.3, {opacity:0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'all'});
        
        currentTab = tabNumber; 
    }
    navOpen = document.querySelector('.nav-navbar');
    navClosed = document.querySelector('.nav-navbar-collapse');
    // console.log(navOpen);
    // console.log(navClosed);
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