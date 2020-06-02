function init(){
    const pages = document.querySelectorAll('.page');
    const tabs = document.querySelectorAll('.tabs');
    tabs.forEach((tab, index)=>{
        tab.addEventListener('click', function(){
            changeTabs(this);
            changePage(index);
            scrollTab = index;
        });
    });
    currentTab = 0;
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
}
init()