import Logo from "@/components/_general/Logo";
import './404.scss';

export default function ErrorPage() {
    return (
        <div id="not-found">
            <div>
                <Logo />
                <h1>Not Found</h1>
                <p>Could not find requested resource</p>
            </div>
        </div>
    )
}