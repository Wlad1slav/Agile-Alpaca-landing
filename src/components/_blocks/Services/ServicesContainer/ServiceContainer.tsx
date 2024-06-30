import '@/components/_blocks/Services/ServicesContainer/styles/service-container.scss';

function ServiceContainer({title, text, color}: Readonly<{title: string, text: string, color: 'dark' | 'light'}>) {
    return (
        <div className={`service--container ${color}`}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default ServiceContainer;