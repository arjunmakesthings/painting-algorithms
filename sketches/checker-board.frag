//checkerboard to check if my brain is still sane. 

#ifdef GL_ES
precision mediump float; 
#endif

//uniforms: 
uniform vec2 u_resolution;
uniform float u_time; 

void main(){
	vec3 color = vec3(0.0).rgb; //default to black.
	vec2 uv = gl_FragCoord.xy / u_resolution.xy;
	vec2 pos = gl_FragCoord.xy; 

	float size = smoothstep(0.0,1.0,sin(u_time*0.0005));
	//int x = int(floor(gl_pos.x / 20.0))

	if (mod(pos.x / size, 2.0)<1.0 && mod(pos.y / size, 2.0)<1.0){
		color = vec3(1.0); 
	}
	else{
		color = vec3(0.0); 
	}

	/*

	if (mod(uv.x * u_resolution.x, 2.0)<1.0 && mod(uv.y * u_resolution.y, 2.0)<1.0){
		color.r = 0.0; 
	}
	else{
		color.r = 1.0; 
	}

	*/

	gl_FragColor = vec4(color, 1.0); 
}
