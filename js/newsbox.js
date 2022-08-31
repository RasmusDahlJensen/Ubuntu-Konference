const newsObject = {
    news1: { headline: 'NVIDIA Proprietary Driver Causes Last Minute Headache For Ubuntu', picture: 'https://images.pexels.com/photos/8622911/pexels-photo-8622911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', url: 'https://www.phoronix.com/news/Ubuntu-20.04.5-NVIDIA-Issue'},
    news2: { headline: 'Dell Now Preloading Ubuntu 22.04', picture: 'https://www.phoronix.net/image.php?id=2022&image=dell_xps_2204_med', url: 'https://www.phoronix.com/news/Dell-Preload-ADL-XPS-13-Ubuntu'},
    news3: { headline: 'Ubuntu Touch OTA-23 Released', picture: 'https://www.phoronix.net/image.php?id=ubuntu_nexus_7&image=ubuntu_nexus7_benchmarks_med', url: 'https://www.phoronix.com/news/Ubuntu-Touch-OTA-23'},
    news4: { headline: 'Microsoft Azure outage knocks Ubuntu VMs offline after buggy update', picture: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', url: 'https://www.bleepingcomputer.com/news/microsoft/microsoft-azure-outage-knocks-ubuntu-vms-offline-after-buggy-update/'},
    news5: { headline: 'Canonical adds .NET to Ubuntu 22.04 ', picture: 'https://www.zdnet.com/a/img/resize/3bf22eaa45c521cd27e452c0630e34f2a20219d4/2022/08/16/2dffa18c-ef8f-48bb-8ec4-d551799e28c5/ubnutu-net.jpg?auto=webp&width=1200', url: 'https://www.zdnet.com/article/canonical-adds-net-to-ubuntu-22-04/'},
    news6: { headline: 'Canonical Ubuntu now available on Ampere', picture: 'https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,e_sharpen,c_fill,w_555,h_311/https://ubuntu.com/wp-content/uploads/b06e/Azure-Arm-Ampere.png', url: 'https://ubuntu.com/blog/canonical-ubuntu-now-available-on-ampere-altra-arm-based-virtual-machines-on-microsoft-azure'},
    news7: { headline: 'Popular programming language, Kotlin, launches as a snap for Linux', picture: 'https://kotlinlang.org/assets/images/twitter/general.png', url: 'https://canonical.com/blog/popular-programming-language-kotlin-launches-as-a-snap-for-linux'},
    news8: { headline: 'Firefox Quantum snap now available on Linux-based devices', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Firefox_brand_logo%2C_2019.svg/2048px-Firefox_brand_logo%2C_2019.svg.png', url: '#https://canonical.com/blog/firefox-quantum-snap-now-available-on-linux-based-devices'},
};

//Parent
const news = document.getElementById('newsBox')


//Loop

for (const myIndex in newsObject) {
    let headline = newsObject[myIndex].headline
    let picture = newsObject[myIndex].picture
    let url = newsObject[myIndex].url

    // console.log(headline);
    // console.log(picture);
    // console.log(url);

    newsBox(headline, picture, url)
}

function newsBox(headline, picture, url) {
    const newsFigure = document.createElement("figure")
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const link = document.createElement("a");

    image.src = picture;
    link.setAttribute('href', url)
    link.setAttribute('target', "_blank")
    title.textContent = headline;

    news.appendChild(newsFigure)
    newsFigure.appendChild(link)
    link.appendChild(image)
    link.appendChild(title)
    
}