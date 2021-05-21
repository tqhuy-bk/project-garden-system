import React from 'react';
import { Link } from 'react-router-dom';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import './styles.scss'
import { Box } from '@material-ui/core';

Garden.propTypes = {
    
};


function Garden(props) {
    return (
        <Box className="detail">
            <div className="detail-left">
            <img src="https://images.unsplash.com/photo-1571192776145-9f563c1df686?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" className="detail-img" />
            <div>
            <Link to="/user/garden/:id" className="detail-link">General</Link>
            </div>
            <div >
            <Link to="/user/garden/:id/report" className="detail-link"> General</Link>
            </div>
            </div>
            <div className="detail-right">
                <div className="detail-list">
                    <div className="detail-item">
                        <BeachAccessIcon/>
                        <span className="detail-desc">Temperature</span>
                        <span className="detail-value">38</span>
                    </div>
                    <div className="detail-item">
                        <BeachAccessIcon classNam="detail-icon"/>
                        <span className="detail-desc">Humidity</span>
                        <span className="detail-value">38</span>
                    </div>
                    <div className="detail-item">
                        <BeachAccessIcon/>
                        <span className="detail-desc">Humidity</span>
                        <span className="detail-value">38</span>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Garden;