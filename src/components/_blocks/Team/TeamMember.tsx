import Link from 'next/link';
import './styles/team-member.scss';

/**
 * Component for rendering a single team member.
 * @param name - The name of the team member.
 * @param position - The position of the team member.
 * @param imageUrl - The URL of the team member's image.
 * @param pageUrl - The URL of the team member's page (optional).
 * @param title - The title of the link (optional).
 * @returns The rendered team member component.
 */
function TeamMember({name, position, imageUrl, pageUrl, title=''}: Readonly<TeamMemberProps>) {
    // Render the team member component.
    return (
        <>
            {
                // If the team member has a page URL, render a link instead of a div.
                pageUrl ? <Link href={pageUrl} className="team-member" title={title}>
                    <img src={imageUrl} alt={`${name} photo`} loading='lazy' />
                    <div className="info">
                        <h3>{name}</h3>
                        <p>{position}</p>
                    </div>
                </Link> :
                
                // If the team member does not have a page URL, render a div instead.
                <div className="team-member">
                    <img src={imageUrl} alt={`${name} photo`} loading='lazy' />
                    <div className="info">
                        <h3>{name}</h3>
                        <p>{position}</p>
                    </div>
                </div>
            }
        </>
    );
}

export default TeamMember;