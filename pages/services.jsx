// const { default: PageBanner } = require("@/src/components/PageBanner")
// const { default: Layout } = require("@/src/layouts/Layout")


// const Services = () => {
//     return <Layout header={2} footer={2}>
//         <div style={{
//             position: 'relative',
//             zIndex: 1,
//             overflow: 'hidden',
//             padding: '150px 15px 130px'
//         }}>
//             <section id='service-elagage'>

//                     <div id='title-tile' className="d-flex flex-row p-3 rounded text-white align-items-center" style={{
//                         background: '#6b7d5c'
//                     }}>
//                         <div className="icon" style={{
//                             fontSize: '30px'
//                         }}>
//                             <i className="flaticon-scissors" />
//                         </div>
//                         <h3 className="title ml-2">Elagage</h3>
//                     </div>
//                     <div className="d-flex flex-row mt-3">
//                         <div className="mr-3">
//                             <img className="rounded" src="assets/images/gallery/project-3.jpg"></img>
//                         </div>
//                         <h6 >
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                         </h6>
//                     </div>

//             </section>

//         </div>
//     </Layout>
// }
// export default Services;

const { default: Layout } = require("@/src/layouts/Layout");

const Services = () => {
    return (
        <Layout header={2} footer={2}>
            <div className="services-container">
                <section id='service-elagage'>
                    <div className={`title-tile`}>
                        <div className="icon">
                            <i className="flaticon-scissors" />
                        </div>
                        <h3 className="title text-white">Elagage</h3>
                    </div>
                    <div className={`content-container`}>
                        <div className={`image-container col-md-3 col-sd-12 pl-0`}>
                            <img src="assets/images/gallery/project-3.jpg" alt="Elagage" />
                        </div>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h6>
                    </div>
                </section>
            </div>
            <ServiceSection
                title={'Paysagiste'}
                imgPosition={'right'}
                imgSrc={'assets/images/gallery/project-3.jpg'}>
                    <div>
                        Ceci est un test
                    </div>
                </ServiceSection>
        </Layout>
    );
}

export default Services;


const ServiceSection = ({ title, description, imgSrc, imgPosition, iconPath, children }) => {
    const imageContainerClass = `image-container col-md-3 col-sm-12 ${imgPosition === 'left' ? 'pr-3' : 'pl-3'}`;

    return (
        <div className="services-container">
            <section id={`service-${title.toLowerCase()}`}>
                <div className="title-tile d-flex align-items-center">
                    <img src={iconPath}></img>
                    <h3 className="title text-white ml-2">{title}</h3>
                </div>
                <div className="content-container d-flex">
                    {imgPosition === 'left' && (
                        <div className={imageContainerClass}>
                            <img src={imgSrc} alt={title} className="rounded" />
                        </div>
                    )}
                    <h6 className="flex-grow-1">{children}</h6>
                    {imgPosition === 'right' && (
                        <div className={imageContainerClass}>
                            <img src={imgSrc} alt={title} className="rounded" />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};