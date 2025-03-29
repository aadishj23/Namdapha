package com.example.namdapha_backend.Service;

import com.example.namdapha_backend.Model.Image;
import com.example.namdapha_backend.Model.News;
import com.example.namdapha_backend.Repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository ;

    @Autowired
    private ImageService imageService ;


    public News addNews(News news, MultipartFile file) throws IOException {
        if(file!=null && !file.isEmpty()){
            Image uploadedImage = imageService.uploadImage(file,"Admin","news") ;
            news.setImage(uploadedImage);
        }
        return newsRepository.save(news) ;
    }

    public void deleteNews(String newsId){
        News news = newsRepository.findById(newsId).orElseThrow(()-> new RuntimeException("News not found with :"+newsId)) ;
        if(news.getImage()!=null){
            try {
                imageService.deleteImage(news.getImage().getId());
            } catch (IOException e) {
                throw new RuntimeException("Image not deleted") ;
            }
        }

        newsRepository.deleteById(newsId);
    }

    public List<News> getAllNews(){
        return newsRepository.findAll() ;
    }


}
