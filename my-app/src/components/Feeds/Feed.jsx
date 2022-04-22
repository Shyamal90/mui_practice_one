import { Box } from '@mui/material'
import React from 'react'

import RecipeReviewCard from '../Cards/RecipeReviewCard'

function Feed() {
  return (
    <Box sx={{ flex: "4"}}>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
    </Box>
  )
}

export default Feed
