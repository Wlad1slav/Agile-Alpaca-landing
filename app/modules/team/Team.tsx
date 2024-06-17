import TeamMember from "@/app/components/teamMember/TeamMember";

import './team.scss';

function Team({team}: Readonly<{ team: ComponentTeamMemberInterface[] }>) {
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

export default Team;