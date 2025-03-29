package com.example.namdapha_backend.Controller;

import com.example.namdapha_backend.Model.News;
import com.example.namdapha_backend.Service.NewsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private NewsService newsService ;

    @PostMapping("/addNews")
    public ResponseEntity<News> addNews(@RequestParam("news") String newsJson, @RequestPart("file")MultipartFile file){

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            News news = objectMapper.readValue(newsJson, News.class);

            News savedNews = newsService.addNews(news,file);
            return ResponseEntity.ok(savedNews) ;
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }

    @DeleteMapping("/delete/{newsId}")
    public ResponseEntity<String> deleteNews(@PathVariable String newsId){
        try{
            newsService.deleteNews(newsId);
            return ResponseEntity.ok("News deleted successfully") ;
        }
        catch (RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage()) ;
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().body("Failed to delete news") ;
        }
    }


    @GetMapping("/getAll")
    public ResponseEntity<List<News>> getAllNews(){
        List<News> allNews = newsService.getAllNews() ;
        return ResponseEntity.ok(allNews) ;
    }
}
