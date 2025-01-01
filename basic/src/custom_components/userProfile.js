import React from 'react';

function UProfile(props) {
    return (
        <div className="card-wrapper">
            <img src={props.picture} alt={props.name} className={props.class} />
        </div>
    )


}

UProfile.defaultProps= {
    class : "profile-image"
}
export { UProfile };