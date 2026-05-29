//make a bristle move over time; 260528. 

#ifdef GL_ES
	precision mediump float; 
#endif

//uniforms: 
uniform vec2 u_resolution;
uniform float u_time;
uniform int u_frame; 

uniform vec2 u_mouse; 

uniform sampler2D u_doubleBuffer0; 

//helpers:
//if you operate on variables being passed, you must define them as inout otherwise it creates a copy for the function by default.
void flip(inout vec2 uv){
	uv.y = 1.0 - uv.y; 
}

void main(){
	vec2 pos = gl_FragCoord.xy; 
	vec2 uv = pos.xy / u_resolution.xy;
	vec2 norm_mouse = vec2(u_mouse / u_resolution); 

	//flip:
	//flip(uv);

	vec3 color = vec3(0.0);

	//brush stuff: 
	vec2 brush_pos = vec2(norm_mouse); //follow the mouse.
	float size = 0.05;  

	float d = distance(uv, brush_pos);

	//paint only on canvas, and clear when i'm outside.
	if (u_mouse.x > 1.0 && u_mouse.y > 1.0){

#ifdef DOUBLE_BUFFER_0
	//compute:

	//take color from last frame:
	color = texture2D(u_doubleBuffer0, uv).rgb;

	if (color.r == 1.0){
		//if it was white, let it be white; and don't do any computation on it:
		color = vec3(1.0); 
	}else{
		//if it was black, we do computation on it:
		//check distance again: 
		if (d < size){
			color = vec3(1.0); 
		}else{
			color = vec3(0.0); 
		}
	}

#else
	//main buffer:
	color = texture2D (u_doubleBuffer0, uv).rgb; 

#endif
	//output:
	gl_FragColor = vec4(color, 1.0); 
	
}
}
