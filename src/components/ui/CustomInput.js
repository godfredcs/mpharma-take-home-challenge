import React from 'react';

const CustomInput = ({title, value = '', type = 'text', onChange}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">{title}</span>
            </div>
            <input
                type={type}
                value={value}
                aria-label={title}
                onChange={onChange}
                className="form-control"
                aria-describedby="inputGroup-sizing-sm" />
        </div>
    );
};

export default CustomInput;
