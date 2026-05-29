//make a bristle move over time; 260528. 

#ifdef GL_ES
	precision mediump float; 
#endif

//uniforms: 
uniform vec2 u_resolution;
uniform float u_time;
uniform int u_frame; 

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
	flip(uv);

	vec3 color = vec3(0.0);

	//brush stuff: 
	vec2 brush_pos = vec2(0.5, 0.5); //in the middle.
	float size = 0.05;  

	float d = distance(uv, brush_pos);

	if (d < size){
		color = vec3(1.0); 
	}else{
		color = vec3(1.0,0.0,0.0); 
	}

	//output:
	gl_FragColor = vec4(color, 1.0); 
}
