import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ICrudState } from "./crud-state.interface";

export abstract class CrudStateBase<T> implements ICrudState<T> {

    private loading$ = new BehaviorSubject<boolean>(false);
    private loadingSingle$ = new BehaviorSubject<boolean>(false);
    private list$ = new BehaviorSubject<any>([]);
    private single$ = new BehaviorSubject<any>({});

    constructor(private CRUD_TAG: string) {}
    
    setList(results: any[]) {
        this.list$.next(results);
    }

    getList$() {
        return this.list$.asObservable();
    }

    setSingle(result) {
        this.single$.next(result);
    }

    getSingle$(): Observable<any> {
        return this.single$.asObservable();
    }

    isLoading$(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    setLoading(isLoading: boolean): void {
        this.loading$.next(isLoading);
    }

    isLoadingSingle$(): Observable<boolean> {
        return this.loadingSingle$.asObservable();
    }

    setLoadingSingle(isLoadingSingle: boolean): void {
        this.loadingSingle$.next(isLoadingSingle);
    }
}