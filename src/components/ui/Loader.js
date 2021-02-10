import React from 'react';

const Loader = ({loading = false, title = "loading.."}) => {
    return (
        loading && <div className="text-center mt-3"><small className="bg-warning rounded p-2">{title}</small></div>
    );
}

export default Loader;
