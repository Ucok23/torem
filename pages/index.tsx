import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'

import { PrismaClient, Torem, Prisma } from '@prisma/client'
import { useState } from 'react'
import { ToremCard } from '../components/toremCard'
import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
  backgroundColor: 'blanchedalmond'
}));

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async() =>  {
  const torems: Torem[] = await prisma.torem.findMany();
  
  return {
    props: {
      initTorem: torems
    }
  }
}

const Home = ({ initTorem }) => {
  const [torems, setTorem] = useState<Torem[]>(initTorem);
  // console.log(torems)
  return (
    <div className={styles.container}>
      <Head>
        <title>To Remember</title>
        <meta name="description" content="Your primitif second brain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography align='center' variant='h2'>
        To Remember List
      </Typography>
      <Box sx={{flexGrow: 1}}>
      <Grid container
            justifyContent="center"
            alignItems="center">
        <Grid item xs sm md={6}>
        {
          torems.map((torem, i: number) => {
            return (
                <Item key={i}>
                  <ToremCard {...torem} />
                </Item>
            )
          })
        }
        </Grid>
      </Grid>
      </Box>
      
    </div>
  )
}

export default Home
