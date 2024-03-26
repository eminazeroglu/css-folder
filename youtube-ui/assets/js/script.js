import { videos } from "./data.js";
const videoContent = document.querySelector('#videoContent')
const channelContent = document.querySelector('#channelContent')

const viewItemUi = (video) => {
    return `
        <article class="video-item">
            <a href="https://youtube.com/watch?v=${video.id}" target="_blank" class="link"></a>
            <figure class="photo">
                <img class="img-cover" src="https://img.youtube.com/vi/${video.id}/0.jpg" alt="">
            </figure>
            <div class="inner">
                <figure class="logo">
                    <img class="img-cover"
                        src="${video.channel.photo}"
                        alt="">
                </figure>
                <div class="info">
                    <h4 class="name">
                        ${video.name}
                    </h4>
                    <div class="channel">
                        <span>${video.channel.name}</span>
                        <i class="icon icon-sm icon-bg-gray icon-verifide"></i>
                    </div>
                    <div class="view">
                        <span>${video.view}</span>
                        <span class="dot"></span>
                        <span>${video.date}</span>
                    </div>
                </div>
            </div>
        </article>
    `
}

const viewChannelUi = (channel) => {
    return `
        <a href="#" class="subscription-item">
            <figure>
                <img class="img-cover"
                    src="${channel.photo}"
                    alt="">
            </figure>
            <span class="text">${channel.name}</span>
            <span class="dot"></span>
        </a>
    `
}

videos.forEach(video => videoContent.insertAdjacentHTML("beforeend", viewItemUi(video)))
videos.forEach(video => channelContent.insertAdjacentHTML("beforeend", viewChannelUi(video.channel)))