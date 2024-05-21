const YoutubeEmbed = ({ embedId }) => (
    <div className="w-full">
      
    <iframe 
        className="w-full min-h-[300px] md:min-h-[400px] h-auto max-h-[512px] rounded-3xl"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
    </iframe>
    </div>
  );

  export default YoutubeEmbed