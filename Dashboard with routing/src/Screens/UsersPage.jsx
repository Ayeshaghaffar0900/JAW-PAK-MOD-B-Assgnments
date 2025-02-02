// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/system';
import "././Mainpage.css"
const UsersPage = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () =>{
            try{
                const responce = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await responce.json();
                setUsers(data);
            }
            catch(error) {
                console.log('error',error);
            }
        }
        fetchUsers();
        },[])

    // console.log(data);
//     // fetching data
//     const fetchUsers = async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         const data = await response.json();
//         console.log(data);
//         // return data;
//     }
//     // console.log(fetchUsers());
//     fetchUsers.map((item,index) => {
        
//     })
   return (
    <>
          <button className="nav-button"><Link to={'/'}>Back to Dashboard</Link></button>

        <Grid container spacing={2} padding={2}>
          {users.map((user, index) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card sx={{ minWidth: 275, textAlign: "center" }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFUWapAG8HRAwR7YX8tyeX7tAZnL1Ur9ObQ&s`}
                        alt={user.name}
                        />
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography color="textSecondary">{user.email}</Typography>
                  <Typography variant="body2">{user.phone}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    </>
      );
}

export default UsersPage
