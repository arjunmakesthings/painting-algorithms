//make a bristle move over time; 260528. 

#ifdef GL_ES
	precision mediump float; 
#endif

//uniforms: 
uniform vec2 u_resolution;
uniform float u_time; 

uniform sampler2D u_doubleBuffer0; 

//helpers:
//if you operate on variables being passed, you must define them as inout otherwise it creates a copy for the function by default.
void flip(inout vec2 uv){
	uv.y = 1.0 - uv.y; 
}

void main(){
	vec2 pos = gl_FragCoord.xy; 
	vec2 uv = pos.xy / u_resolution.xy;

	//flip:
	//flip(uv);

	vec3 color = vec3(0.0); 

	float size = 20.0; 

	//starting state: 
	if (u_frame==0){
		if
	}
	else{

#ifdef DOUBLE_BUFFER_0
		//compute here:
		//get history for each pixel. 
		vec4 prev = texture2D(u_doubleBuffer0, uv).rgba; 
		color = vec3(prev.rgb); 


#else
		//show buffer as is:
		color = texture2D(u_doubleBuffer0.uv).rgb; 

#endif
		//output:
		gl_FragColor = vec4(color, 1.0); 
	}
}
