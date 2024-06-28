import TeamMember from "@/components/_blocks/Team/TeamMember";

import './styles/team.block.scss';

function TeamBlock({team}: Readonly<{ team: TeamMemberProps[] }>) {
    return (
        <div className="team">
            {
                team.map((value) =>{
                    return <TeamMember name={value.name} position={value.position} imageUrl={value.imageUrl} pageUrl={value.pageUrl} />
                })
            }
        </div>
    );
}

export default TeamBlock;