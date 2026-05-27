//checkerboard to check if my brain is still sane. 

#ifdef GL_ES
precision mediump float; 
#endif

//uniforms: 


void main(){
	vec3 color = vec3(0.0).rgb; //default to black. 

	if (mod(gl_FragCoord.x, 2.0)==0.0){
		color.r = 1.0; 
	}else{
		color.r = 0.0; 
	}
	gl_FragColor = vec4(color, 0.0); 
}
