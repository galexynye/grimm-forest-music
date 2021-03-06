// STATIC QUERY COMPONENTS ARE COMMENTED OUT until further consideration for graphql

// import React, { Component } from 'react'
// import { Link } from 'gatsby'
// import styled from 'styled-components'
// import { StaticQuery, graphql } from 'gatsby'
// import { msTheme } from '../../styles/Theme'
// import { PostCardHomeRecent } from '../02_molecule/PostCardHomeRecent'
// import { GridContainer, GridItem } from '../00_utilities/Utilities'


// // Static Query Component - Queries Recent Posts and Displays them

// import SaftyPic from '../../assets/GrimmGraphics/grimmfavicon180.png'


// const RecentPostsStyled = styled.div`
// padding: 110px 0px 90px 0px;
// border-bottom: 2px solid lightgray;

// `

// export class RecentPostsView extends Component {
//   render() {
//     const posts = this.props.data.allMarkdownRemark.edges

//     let src // Set the source of the featured image
//     const RecentPostCards = posts.map((post, i) => {
//       // Checks if no featured image
//       if (!post.node.frontmatter.featuredImage) {
//         src = SaftyPic
//       } else {
//         src = post.node.frontmatter.featuredImage.childImageSharp.fluid.src
//       }

//       if (i == 0) {
//         return (
//           <GridItem gCSM="1" gCEM="3">
//             <PostCardHomeRecent
//               key={post.node.fields.slug}
//               learnOrBlog={post.node.frontmatter.category}
//               snippet={post.node.excerpt}
//               date={post.node.frontmatter.date}
//               title={post.node.frontmatter.title}
//               category={post.node.frontmatter.subcategory}
//               slug={post.node.fields.slug}
//               src={src}
//               minHeight="60px"
//             />
//           </GridItem>
//         )
//       }



//       return (
//         <PostCardHomeRecent
//           key={post.node.fields.slug}
//           learnOrBlog={post.node.frontmatter.category}
//           snippet={post.node.excerpt}
//           date={post.node.frontmatter.date}
//           title={post.node.frontmatter.title}
//           category={post.node.frontmatter.subcategory}
//           slug={post.node.fields.slug}
//           src={src}
//           minHeight="60px"
//         />)
//     })


//     return (
//       <RecentPostsStyled>
//         {/* <GridContainer gTC="1fr 1fr" className="mT40" >
//           <ButtonCTA to="/learn" bgColor={msTheme.colors.primary} color="white" text="Learn Music"></ButtonCTA>
//           <ButtonCTA to="/blog" bgColor={msTheme.colors.primary} color="white" text="Read Blog"></ButtonCTA>
//         </GridContainer> */}
//         <GridContainer gTCL="repeat(3, 1fr)" gridGap="40px 65px" gridGapL="45px">
//           {RecentPostCards}
//           <GridItem gCS="1" gCE="4">
//             <p className="headerFont">Check out more articles on the <Link to="/learn">learn page </Link> or blog posts <Link to="/blog">here</Link>.</p>
//           </GridItem>
//         </GridContainer>
//       </RecentPostsStyled >
//     )
//   }
// }

// export const RecentPosts = props => (
//   <StaticQuery
//     query={graphql`
//        query {
//         allMarkdownRemark(
//             limit: 3
//           sort: {
//             fields: [frontmatter___date]
//             order: DESC
//           }
//         ) {
//           edges {
//             node {
//               excerpt
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//                 category
//                 subcategory                                
//                 date(formatString: "MMMM DD, YYYY")
//                 featuredImage {
//                  childImageSharp {
//                    fluid {                    
//                      src                   
//                    }
//                  }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => <RecentPostsView data={data} {...props} />}
//   />
// )