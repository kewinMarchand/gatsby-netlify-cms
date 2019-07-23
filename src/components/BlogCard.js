import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import LinkButton from './LinkButton'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'

class BlogCard extends React.Component {
  
  state = {
    raised: false
  }

  toggleCardRaising = () => {
    this.setState({raised: !this.state.raised})
  }

  render() {
    const {post} = this.props,
      {featuredpost, featuredimage, title, date} = post.frontmatter,
      {slug} = post.fields

    return (
      <Grid 
        item xs={12} md={6} 
        component={'article'} 
        key={post.id}
      >
        <Card 
          style={{height: '100%'}}
          onMouseEnter={this.toggleCardRaising} 
          onMouseLeave={this.toggleCardRaising} 
          raised={this.state.raised}
          className={`${featuredpost ? 'is-featured' : ''}`}
        >
          <CardContent style={{height: '100%'}}>
            <Grid container direction={'column'} style={{height: '100%'}}>
              <Grid container component={'header'} style={{marginBottom: 8}}>
                {featuredimage &&
                  <Grid item xs={4} component={'figure'} style={{paddingRight: 16}}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: featuredimage,
                        alt: `featured image thumbnail for post ${post.title}`
                      }}
                    />
                  </Grid>
                }
                <Grid item xs={8}>
                  <Link to={slug}>
                    <Typography variant={'h5'} gutterBottom color={'secondary'}>
                      {title}
                    </Typography>
                  </Link>
                  <Typography variant={'subtitle1'} gutterBottom>
                    Le {date}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction={'column'} alignItems={'flex-end'} wrap={'nowrap'} style={{flexGrow: 1}}>
                <Grid item xs={12} style={{flexGrow: 1}}>
                  <Typography variant={'body2'} gutterBottom>
                    {post.excerpt}
                  </Typography>
                </Grid>
                <Grid item>
                  <LinkButton href={slug} text={"Lire la suite →"} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

BlogCard.propTypes = {
  post: PropTypes.any
}

export default BlogCard
