import React from "react";
import DashboardRoutesReusableTemplate from "../components/DashboardRoutesReusableTemplate";
import "../Style/userProfile.css";
import {Comment, List} from "antd";
import {IReview} from "../api/internalAPI/internalApiTypes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
const data = [
    {
        userEmail: "test2@gmail.com",
        userID: "2",
        movieID: "2",
        recommendation: true,
        movieTitle: "The Godfather",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        `
    },
    {
        userEmail: "test2@gmail.com",
        userID: "2",
        movieID: "2",
        recommendation: true,
        movieTitle: "The Godfather",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        `
    },
    {
        userEmail: "test2@gmail.com",
        userID: "2",
        movieID: "2",
        recommendation: true,
        movieTitle: "The Godfather",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        `
    },
    {
        userEmail: "test2@gmail.com",
        userID: "2",
        movieID: "2",
        movieTitle: "The Godfather",
        recommendation: true,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        `
    },
    {
        userEmail: "test2@gmail.com",
        userID: "2",
        movieID: "2",
        movieTitle: "The Godfather",
        recommendation: true,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        `
    },
    {
        userEmail: "test2@gmail.com",
        userID: "2",
        movieID: "2",
        movieTitle: "The Godfather",
        recommendation: true,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        `
    },
    {
        userEmail: "test2@gmail.com",
        userID: "2",
        movieID: "2",
        movieTitle: "The Godfather",
        recommendation: true,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda 
        consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam 
        molestiae non numquam omnis perferendis qui quos soluta, voluptatum.
        `
    },
    {
        userEmail: "test2@gmail.com",
        userID: "2",
        movieID: "1",
        movieTitle: "The Godfather",
        recommendation: false,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda " +
            "consequatur debitis earum eius esse ex excepturi, facere hic impedit laboriosam " +
            "molestiae non numquam omnis perferendis qui quos soluta, voluptatum."
    },
] as IReview[];
export const UserReviews = () => {
  return (
    <DashboardRoutesReusableTemplate
      children={
            <div className={"user-reviews-container"}>
                <List<IReview>
                    className="review-list"
                    bordered={true}
                    rowKey={(item: IReview) => item.userEmail}
                    header={`${data.length} Reviews`}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={rev => (
                        <Comment
                            className={'review-item'}
                            author={<h4>{rev.movieTitle}</h4>}
                            content={rev.text}
                            actions={[
                                <FontAwesomeIcon  className="like-icon review-recommend" icon={rev.recommendation?
                                    faThumbsUp: faThumbsDown}/>
                            ]}
                        />


                    )}
                />
            </div>
      }
    />
  );
};
