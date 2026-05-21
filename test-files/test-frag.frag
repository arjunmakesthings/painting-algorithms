//test fragment shader for glsl-viewer. 
#ifdef GL_ES
	precision mediump float;
#endif 

//pass resolution to the fragment shader. 
uniform vec2 u_resolution; 

//mouse coordinates.
uniform vec2 u_mouse;

void main(){
	//shader coordinates begin from bottom left. to make it more natural for drawing, we converrt these coordinates first; so that top-left is 0,0.
	vec2 uv = gl_FragCoord.xy / u_resolution.xy; 
	uv.y = 1.0 - uv.y; //flip y; let x remain same.

	//map mouse to resolution.
	float mx = u_mouse.x/u_resolution.x;

	float g =  uv.y;
	float r = uv.x;
	float b = mx;    

	gl_FragColor = vec4(r, g, b, 1.0); 	
}
