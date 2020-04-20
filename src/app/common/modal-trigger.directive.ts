import { Directive, OnInit, Inject, ElementRef , HostListener, Input} from "@angular/core";
import { JQ_TOKEN } from './jquery.service';

@Directive({
    selector:'[modal-trigger]'    
})

export class ModelTriggerDirective implements OnInit{
   private el: HTMLElement
    @Input('modal-trigger') modelId: string

    constructor(
        @Inject(JQ_TOKEN) private $: any,
        private ref: ElementRef)
    {
        this.el = ref.nativeElement
    }   
   
    // @HostListener('onclick') onclick(){
    //     console.log('ModelTriggerDirective - onClick')
        
    // }
    ngOnInit(): void {
        console.log('ModelTriggerDirective - ngOnInit')
        this.el.addEventListener('click', ev => {
            console.log('ModelTriggerDirective - onClick')            
            //this.$('#SearchID').modal('show')
            this.$(`#${this.modelId}`).modal('show') //This is called as string interpolation
        });
    }

}