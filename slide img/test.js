
( function ( ) {

    const slider_basic = document.querySelectorAll( '[data-slider]' );

    slider_basic.forEach( function ( ele_bic ) {
    
    
        if ( ele_bic.getAttributeNode( 'data-slider' ).value == 'true' ) {
    
    
            let slider_imges = Array.from( document.querySelectorAll( '.slider-imgs img' ) ),
                slices_imgs = document.querySelectorAll( '.slices-imgs' );
    
            slices_imgs.forEach( function ( ele_slices_imgs ) {
    
                if ( ele_slices_imgs.getAttributeNode( 'data-imgs' ).value == 'slide' ) {
    
                    let slider_Len = slider_imges.length,
                        current_slide = 1,
                        slider_info = document.querySelectorAll( '.slider-info' );
                    
                    
                    var navigation_next = document.querySelectorAll( '[data-navigation="next"]' ),
                        navigation_prev = document.querySelectorAll( '[data-navigation="prev"]' );
                    
                    
    
                    navigation_onslider( navigation_next, next_slider );
    
                    navigation_onslider( navigation_prev, prev_slider );
    
    
                    function navigation_onslider( navigation, ev_navigation ) {
    
                        navigation.forEach( function ( ele_navigation ) {
    
                            ele_navigation.addEventListener( 'click', ev_navigation );
        
                        } );
    
                    }
    
    
                    let indicators_slider = document.querySelectorAll('[data-indicators]');
    
                    indicators_slider.forEach( function ( ele_indicators ) {
    
                        if (ele_indicators.getAttributeNode( 'data-indicators' ).value == 'true' ) {
    
                            let create_pagination = document.createElement( 'ul' );
                    
                            create_pagination.setAttribute( 'pagination', '' );
                            
                            for ( let i = 1; i <= slider_Len; i++ ) {
                            
                                let create_pagination_item = document.createElement( 'li' );
                            
                                create_pagination_item.setAttribute( 'data-index', i );
                            
                                create_pagination.appendChild( create_pagination_item );
                            
                            }
                            
                            ele_indicators.appendChild( create_pagination );
            
                        } else if (ele_indicators.getAttributeNode( 'data-indicators' ).value == 'false' ) {
    
                            console.log('data-indicators : false')
    
                        }
    
                    } ) ;
    
    
                    var pagination_bullets = Array.from( document.querySelectorAll( '[pagination] li' ) );
                            
    
                    if (pagination_bullets !== undefined) {
    
                        for ( let i = 0; i < pagination_bullets.length; i++ ) {
                    
                            pagination_bullets[i].addEventListener( 'click', function ( ) {
                        
                                current_slide = parseInt( this.getAttribute( 'data-index' ) );
                        
                                if ( parseInt( this.getAttribute( 'data-index' ) ) > current_slide - 1 ) {
                        
                                    check_for_slider( );
                        
                                } else {
                        
                                    check_for_slider( );
                        
                                }
                                
                            } );
                        
                        }
    
                    }
    
    
                    check_for_slider( );
    
                    
                    window.addEventListener( 'load', function ( ) {
                    
                        set_H_and_W_for_slices( );
                    
                        const automatic_navigation = document.querySelectorAll( '[data-automatic-navigation]' );
    
                        automatic_navigation.forEach( function ( ele_automatic_navigation ) {
    
    
                            if ( ele_automatic_navigation.getAttributeNode('data-automatic-navigation').value == 'true' ) {
    
                                setInterval( function ( ) {
                    
                                    navigation_next.forEach( function ( ele_navigation ) {
            
                                        ele_navigation.click( );
            
                                    } );       
                            
                                }, ele_automatic_navigation.getAttributeNode( 'data-timeout' ) !== null ? ele_automatic_navigation.getAttributeNode( 'data-timeout' ).value : 10000 );
    
                            }
    
                        } ); 
                    
                    } );
                    
                    
                    
                    function next_slider( ) {
                    
                        current_slide++;
                    
                        check_for_slider( );
                    
                    }
                    
                    function prev_slider( ) {
                    
                        current_slide--;
                    
                        check_for_slider( );
                    
                    }
                    
                    
                    function check_for_slider( ) {
                    
                        slider_info.forEach( function ( ele_info ) {
    
                            if ( ele_info.getAttributeNode( 'data-info' ).value == 'true' )
                                ele_info.textContent = `${ current_slide } / ${ slider_Len }`;
    
                        } );
                    
                        removeAllActive( );
                    
                        if (  current_slide > slider_Len  ) {
                    
                            current_slide = 1;
                    
                        } 
                    
                        if (  current_slide <= 0  ) {
                    
                            current_slide = slider_Len;
                    
                        }
                        
                        if (  slider_imges[current_slide - 1] != 0  ) {
                    
                            slider_imges[current_slide - 1].style.left = `${ ( parseInt( slider_imges[current_slide - 1].clientWidth ) * ( -1 ) ) }px`;
                            slider_imges[current_slide - 1].classList.add( 'active' );
    
                            if ( typeof( pagination_bullets ) == 'object' ) {
    
                                pagination_bullets[current_slide - 1].classList.add( 'active' );
    
                            }
    
                        }
                    
                    }
                    
                    function set_H_and_W_for_slices( ) {
                    
                        slider_imges.forEach( function ( img ) {
                    
                            img.style.height = `${ slider_imges[0].clientHeight }px`;
                        
                            img.style.width = `${ slider_imges[0].clientWidth }px`;
                        
                        } );
                    
                    }
                    
                    function removeAllActive( ) {
                    
                        slider_imges.forEach( function( img ) {
                    
                            img.style.removeProperty( 'left' );
                    
                            img.classList.remove( 'active' );
                    
                        } );
                    
                        pagination_bullets.forEach( function ( bullets ) {
                    
                            bullets.classList.remove( 'active' );
                    
                        } );
    
                    }  
    
                }
    
    
            } );              
    
        }
    
    } );    

} )( );
