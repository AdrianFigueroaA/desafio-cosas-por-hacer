const Panoramas = (() => {
        
      
        let Privado = () => {
        
          contenido.innerHTML = `<div>
                                <h1> Sonata Actica - Wolf and Raven<h1>
                        
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/NPHqfYfHx7s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                                </div> `;
        };
        
        return {
          
          Cine: () => {
            contenido.innerHTML = `
                  <img src="https://vignette.wikia.nocookie.net/cine/images/2/23/Star-Wars-Episode-III-Revenge-of-the-Sith.jpg/revision/latest?cb=20120930201011">
                  `;
          },
          Musica: () => {
            Privado();
          },
          Comida: () => {
            
            contenido.innerHTML = `
                  <h4>Pastel de Choclo <h4>
                  <img src="https://www.enmicocinahoy.cl/wp-content/uploads/2011/02/pastel-choclo-7.jpg">
                  
                  `;
          },
        };
      })();
      
      export default Panoramas;