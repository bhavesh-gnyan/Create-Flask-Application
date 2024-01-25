import { PaginatorService } from '../paginator.service';
import { of, throwError } from 'rxjs';
import { catchError, testScheduler } from 'jest-schedulers-rsf';

describe('Paginator Service', () => {
  let service: PaginatorService;
  
  beforeEach(() => (service = new PaginatorService()));
  
  it('should return the first page when getPage is called with no arguments', done => {
    const expectedResult = [1, 2]; // Assuming you have a data source for this example
    
    service.getPage().subscribe(result => {
      expect(result).toEqual(expectedResult);
      done();
    });
  });
  
  it('should return the second page when getPage is called with offset argument', () => {
    const expectedResult = [3, 4]; // Assuming you have a data source for this example
    
    service.getPage(1).subscribe(result => expect(result).toEqual(expectedResult));
  });
  
  it('should return an empty array when getPage is called with invalid offset argument', () => {
    const expectedResult: number[] = []; // Assuming you have a data source for this example
    
    service.getPage(-1).subscribe(result => expect(result).toEqual(expectedResult));
  });
  
  it('should throw an error when getPage is called with invalid offset argument', () => {
    const expectedError = new Error('Invalid offset'); // Assuming you have a data source for this example
    
    service.getPage(-1).subscribe(result => fail(), err => expect(err).toEqual(expectedError));
  });
});