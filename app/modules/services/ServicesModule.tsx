import ServiceContainer from "@/app/components/services/ServiceContainer";

import './services-block.scss';

function ServicesModule({services}: Readonly<{
    services: Array<ComponentServiceInterface>
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

export default ServicesModule;