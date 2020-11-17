import React from 'react'

const SalesPersonRecord = (props) => {
    return (
        <div className='SP'>
            <section className="Record">
                <span>{props.id}</span>
                <span>{props.name}</span>
                <span>{props.status}</span>
            </section>
        </div>
    )
}

export default SalesPersonRecord
