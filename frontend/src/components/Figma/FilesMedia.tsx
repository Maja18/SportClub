import FilesMediaDiv from "../../styled-components/mainMenuBar/files_media/FilesMediaDiv.styled";
import FilesMediaItem from "../../styled-components/mainMenuBar/files_media/FilesMediaItem.styled";
import files_media from '../../assets/files_media.png'
import saved_messages_files from '../../assets/saved_messages_files.png'
import mentions from '../../assets/mentions.png'
import FilesLabel from "../../styled-components/mainMenuBar/files_media/FilesLabel.styled";

const FilesMedia = () => {
    return(
        <FilesMediaDiv>
            <FilesMediaItem>
                <img src={files_media} alt='files'></img>
                <FilesLabel>
                    Files & media
                </FilesLabel>
            </FilesMediaItem>
            <FilesMediaItem>
                <img src={saved_messages_files} alt='files'></img>
                <FilesLabel>
                    Saved messages & files
                </FilesLabel>
            </FilesMediaItem>
            <FilesMediaItem>
                <img src={mentions} alt='files'></img>
                <FilesLabel>
                    Mentions
                </FilesLabel>
            </FilesMediaItem>
        </FilesMediaDiv>  
    )
}

export default FilesMedia;