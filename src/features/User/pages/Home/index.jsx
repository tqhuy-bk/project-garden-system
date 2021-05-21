import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import CardComponent from "../../../../components/Card/index"

Home.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            // marginLeft: '-1.5rem',
            alignItems: 'flex-start',
            maxWidth: 'calc(100% - 15rem)',
            marginLeft: 'auto',
            paddingTop: '2rem'
        },
        heading: {
            textAlign: 'left',
            paddingTop: '260px'
            
        },
        desc: {
            width: '100%',
            paddingRight: '568px',
            color: '#F4F5F7',
            
        },
        container: {
            backgroundColor: '#f4f5f7',
            width: '100%'
        }
}))

function Home(props) {
    const classes = useStyles()
    return (
        <div className="container">
        <Box className={classes.root}>
          <CardComponent colors="red" url="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          <CardComponent colors="orange" url="https://images.unsplash.com/photo-1580600301354-0ce8faef576c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          <CardComponent colors="yellow" url ="https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdhcmRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          <CardComponent colors="black" url ="https://images.unsplash.com/photo-1544727219-d2ff78f0f148?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          <CardComponent colors="blue" url="https://images.unsplash.com/photo-1566926082274-5a7074e4f048?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhcmRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          </Box>
        </div>
    );
}

export default Home;