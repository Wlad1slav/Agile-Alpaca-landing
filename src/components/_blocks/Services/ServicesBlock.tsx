import ServiceContainer from "@/components/_blocks/Services/ServiceContainer";

import './styles/services-block.block.scss';

function ServicesBlock({services}: Readonly<{
    services: Array<ServiceContainerProps>
}>) {
    return (
        <div className='block--services'>
            {
                services.map((service, num) => {
                    return <ServiceContainer
                        key={num}
                        title={service.name}
                        text={service.description}
                        color={(num+1) % 2 === 0 ? 'dark' : 'light'}
                    />
                })
            }
        </div>
    );
}

export default ServicesBlock;