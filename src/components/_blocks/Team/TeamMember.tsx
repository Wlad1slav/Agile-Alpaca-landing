import './styles/team-member.scss';

function TeamMember({name, position, imageUrl, pageUrl}: Readonly<TeamMemberProps>) {
    return (
        <a href={pageUrl} className="team-member">
            <img src={imageUrl} alt={name}/>
            <div className="info">
                <h3>{name}</h3>
                <p>{position}</p>
            </div>
        </a>
    );
}

export default TeamMember;