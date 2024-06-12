import GetStartedModule from "@/app/modules/getStarted/GetStartedModule";

export default function Home() {
    return (
        <>
            <div className="block--centralized">
                <div className='container'>
                    <h1 style={{textAlign: "center"}}>Build Trust, Gain Devoted Customers</h1>
                    <p style={{textAlign: "center", width: "60%"}}>Build Your Audience & Get Devoted Customers with Agile Alpaca, Marketing Agency Targeted at Human Relationships</p>
                </div>

                <GetStartedModule />
            </div>
        </>
    );
}
