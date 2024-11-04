import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLEINT_ID } from '../../hook/useEnv'

function Home() {
  const {token} = useContext(Context)
  const [tracksList, setTracksList] = useState([])
  const spotifyApi = new SpotifyWebApi({
    clientId:CLEINT_ID
  })
  

  useEffect(() => {
    if(!token) return;
    spotifyApi.setAccessToken(token)
  },[token])

  useEffect(() => {
    if(token){
      spotifyApi.searchTracks("Sherali Jo'rayev ").then(res => {
        setTracksList(res.body.tracks.items.map(item => {
          const data ={
            id:item.id,
            img:item.album.images[0].url,
            trackName:item.name,
            artistName:item.album.artists[0].name,
            uri:item.uri
          }
          return data
        }));
      })
    }
  },[token])

  console.log(tracksList);
  
  return (
    <>
      <div className='flex justify-between gap-5 p-5'>
        {tracksList?.map(item => (
          <div key={item.id} className="min-w-[225px] cursor-pointer p-[21px] rounded-[8px] bg-[#1B1B1B]">
          <img className='h-[182px] mb-[25px] rounded-[8px]' src={item.img} alt="Tracks img" width={"100%"} />
          <h2 className='text-white font-bold text-[20px] mb-2'>{item.trackName}</h2>
          <p className='font-normal text-[18px] text-white opacity-60'>{item.artistName}</p>
        </div>
        ))}
      </div>
    </>
  )
}

export default Home
