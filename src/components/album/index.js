import React, {memo} from 'react';
import {NavLink} from "react-router-dom"

import {AlbumWrapper} from "./style";
import TDLoading from "../loading";
import Image from "../image";
import {formatDate} from "../../utils/format-utils";

const TDAlbum = memo(function (props) {
  const {album = []} = props
  return (
    <AlbumWrapper>
      {
        album.length > 0 ? album.map(item => {
          return (
            <NavLink to={"/album-detail/" + item.id} key={item.id}>
              <div className="tops">
                <Image src={item.picUrl} size={185}/>
                <span className="subType"><i/>{item.subType || item.type}</span>
              </div>
              <div className="info">
                <h4 className="name">{item.name}</h4>
                <div className="artists text-nowrap">
                  {
                    item.artists.map((item, index) => {
                      return (index !== 0 ? " / " : "") + item.name
                    })
                  }
                </div>
                <div className="time">{formatDate(item.publishTime, "yyyy-MM-dd")}</div>
              </div>
            </NavLink>
          )
        }) : <TDLoading/>
      }
    </AlbumWrapper>
  )
})

export default TDAlbum
