import React from 'react';

class Fish extends React.Component {

    render() {
       // const { details, index } = this.props;
        const { details } = this.props;
        const isAvailabe = details.status === 'available';
        const buttonText = isAvailabe ? 'Add to Order' : 'Sold Out!'
        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{details.price}</span>
                </h3>
                <p>{details.desc}</p>
                <button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailabe}>{buttonText}</button>
            </li>
        )
    }
}

Fish.propTypes = {
    details: React.PropTypes.object.isRequired,
    index: React.PropTypes.string.isRequired,
    addToOrder: React.PropTypes.func.isRequired
};

export default Fish;