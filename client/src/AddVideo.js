import React, { useState } from "react";

const AddVideo = (props) => {
    const [videoTitle, setVideoTitle] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    // console.log(props)

    function handleTitleInput(evt) {
        setVideoTitle(evt.target.value);
    }

    function handleUrlInput(evt) {
        setVideoUrl(evt.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`http://localhost:5000/`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'title': videoTitle,
                'url': videoUrl
            })
        })
            .then(response => response.json())
            .then(data => props.setVideoList(props.videoList.concat(data)));

        // props.setVideoList([...props.videoList,
        //     {
        //         'title': videoTitle,
        //         'url': videoUrl
        //     }]);
        setVideoTitle("");
        setVideoUrl("");
    }
    // console.log(props.videoList)
    return (
        <div className="add-wrapper">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    <p>Video Title</p>
                    <input type="text" name="title" value={videoTitle} onChange={handleTitleInput}></input>
                </label>
                <label htmlFor="url">
                    <p>Video Url</p>
                    <input type="url" name="url" value={videoUrl} onChange={handleUrlInput}></input>
                </label>
                <div>
                    <button type="submit" className="add-btn">Add Video</button>
                </div>
            </form>
        </div>
    )
}


export default AddVideo;